<?php

namespace App\Http\Services\Api;

use App\Http\Requests\Api\LoginRequest;
use App\Http\Requests\Api\RegisterRequest;
use App\Http\Requests\Api\UpdateUserRequest;
use App\Models\User;
use App\Helpers\PasswordHandler;
use Illuminate\Support\Facades\Hash;
use PhpParser\Node\Expr\Cast\Object_;

class UserService
{
    /**
     * @param \App\Http\Requests\Api\RegisterRequest $request
     *
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model
     */
    public function create(RegisterRequest $request)
    {
        return User::query()->create($this->getBasicData($request));
    }

    /**
     * @param $email
     *
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model|object|null
     */
    public function getUserByEmail($email)
    {
        return User::query()->where('email', $email)->first();
    }

    public function update(User $user, UpdateUserRequest $request): bool
    {
        return $user->update($request->validated());
    }

    /**
     * @param $request
     *
     * @return array
     */
    private function getBasicData($request): array
    {
        return [
            'name' => $request->name,
            'email' => $request->email,
            'password' => PasswordHandler::generatePassword($request->password)
        ];
    }
}
