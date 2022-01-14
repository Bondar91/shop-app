<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Api\v1\ApiController;
use App\Http\Requests\Api\LoginRequest;
use App\Http\Requests\Api\RegisterRequest;
use App\Http\Resources\Api\UserResource;
use App\Http\Services\Api\UserService;
use App\Helpers\PasswordHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class AuthController extends ApiController
{
    /**
     * @var \App\Http\Services\Api\UserService
     */
    protected $userService;

    /**
     * @param \App\Http\Services\Api\UserService $userService
     */
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * @param \App\Http\Requests\Api\RegisterRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(RegisterRequest $request): JsonResponse
    {
        $user = $this->userService->create($request);

        return $this->responseWithSuccess(new UserResource($user), 'User created success!', Response::HTTP_CREATED);
    }

    /**
     * @param \App\Http\Requests\Api\LoginRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(LoginRequest $request): JsonResponse
    {
        $user = $this->userService->getUserByEmail($request->email);

        if(!$user || !PasswordHandler::checkPassword($user, $request->password))
        {
            return $this->responseWithError('Bad credentials!', Response::HTTP_UNAUTHORIZED);
        }

        $token = $user->createToken('authToken')->plainTextToken;

        return $this->responseWithSuccess(['token' => $token], 'Login succesfull!', Response::HTTP_OK);
    }
}
