/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_login_login_access_token } from '../models/Body_login_login_access_token';
import type { Body_login_reset_password } from '../models/Body_login_reset_password';
import type { Msg } from '../models/Msg';
import type { Token } from '../models/Token';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LoginService {

    /**
     * Login Access Token
     * OAuth2 compatible token login, get an access token for future requests
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static loginAccessToken({
formData,
}: {
formData: Body_login_login_access_token,
}): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/login/access-token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Test Token
     * Test access token
     * @returns User Successful Response
     * @throws ApiError
     */
    public static testToken(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/login/test-token',
        });
    }

    /**
     * Recover Password
     * Password Recovery
     * @returns Msg Successful Response
     * @throws ApiError
     */
    public static recoverPassword({
email,
}: {
email: string,
}): CancelablePromise<Msg> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/password-recovery/{email}',
            path: {
                'email': email,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Reset Password
     * Reset password
     * @returns Msg Successful Response
     * @throws ApiError
     */
    public static resetPassword({
requestBody,
}: {
requestBody: Body_login_reset_password,
}): CancelablePromise<Msg> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/reset-password/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
