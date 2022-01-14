<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\UpdateUserRequest;
use App\Http\Resources\Api\UserResource;
use App\Http\Services\Api\UserService;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class UserController extends ApiController
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
     * @param \App\Models\User                         $user
     * @param \App\Http\Requests\Api\UpdateUserRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(User $user, UpdateUserRequest $request): JsonResponse
    {
        $this->userService->update($user, $request);
        return $this->responseWithSuccess(null, 'User has been updated!', Response::HTTP_OK);
    }
}
