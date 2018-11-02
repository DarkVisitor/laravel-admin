<?php

return [
    /**
     * OAuth grant type.
     *
     * Supported: "authorization_code", "refresh_token", "password", "client_credentials",
     */
    'grant_type' => env('OAUTH_GRANT_TYPE', 'password'),

    /**
     * OAuth clientId
     */
    'client_id' => env('OAUTH_CLIENT_ID', '2'),

    /**
     * OAuth clientSecret
     */
    'client_secret' => env('OAUTH_CLIENT_SECRET', 'qG4cLvhTkSJ1W0gJWLtpEwNeMrlQ1hU0XmZcG1Oi'),

    /**
     * OAuth scope
     */
    'scope' => env('OAUTH_SCOPE', '*')
];