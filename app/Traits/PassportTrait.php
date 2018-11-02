<?php
/**
 * Passport trait.
 * User: YingQuan-han
 * Date: 2018/11/2
 * Time: 9:54
 */

namespace App\Traits;


use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Support\Facades\Log;

trait PassportTrait
{
    /**
     * Requesting Tokens.
     * @param string $guard
     * @return array|bool|mixed|\stdClass
     */
    public function requestingToken($guard = '')
    {
        $http = new Client();
        try {
            $url = request()->root() . '/oauth/token';

            $params = [
                'grant_type' => config('oauth.grant_type'),
                'client_id' => config('oauth.client_id'),
                'client_secret' => config('oauth.client_secret'),
                'username' => request('username'),
                'password' => request('password'),
                'scope' => config('oauth.scope')
            ];
            if ($guard){
                $params['provider'] = $guard;
            }
            $response = $http->request('POST', $url, ['form_params' => $params]);
        }catch (RequestException $exception){
            Log::emergency($exception->getMessage());
            return false;
        }

        if ($response->getStatusCode() === 200){
            return $response = json_decode((string) $response->getBody(), true);
        }

        return false;
    }


    //刷新token
    public function refreshingToken()
    {

    }
}