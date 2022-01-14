<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class ApiController extends Controller
{
    public function responseWithSuccess($data = null, $message, $code): JsonResponse
    {
        $response = [
            'status' => true,
            'message' => $message,
        ];

        if($data !== null){
            $response['data'] = $data;
        }

        return response()->json($response, $code);

    }

    public function responseWithError($message, $code): JsonResponse
    {
        return response()->json([
            'status' => false,
            'message' => $message
        ], $code);
    }
}
