<?php
/**
 * Repository mode bass class.
 * User: YingQuan-han
 * Date: 2018/11/1
 * Time: 14:18
 */

namespace App\Repositories;


use Illuminate\Container\Container as App;
use Illuminate\Database\Eloquent\Model;

abstract class Repository implements RepositoryInterface
{
    protected $app;
    protected $model;

    public function __construct(App $app)
    {
        $this->app = $app;
        $this->makeModel();
    }


    /**
     * 抽象方法
     * @return mixed
     */
    abstract function model();


    /**
     * Make model
     *
     * @throws \Exception
     */
    public function makeModel()
    {
        $model = $this->app->make($this->model());

        if (!$model instanceof Model){
            throw new \Exception('Class {$this->model()} must be an instance of Illuminate\\Database\\Eloquent\\Model');
        }
        $this->model = $model;
    }


    /**
     * Get single data.
     *
     * @param $id
     * @return mixed
     */
    public function findBy($id)
    {
        // TODO: Implement findBy() method.
        return $this->model->where('id', $id)->first()->toArray();
    }

    /**
     * Get single data object.
     *
     * @param $id
     * @return mixed
     */
    public function find($id)
    {
        return $this->model->find($id);
    }
}