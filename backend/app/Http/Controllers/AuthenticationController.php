<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthenticationController extends Controller
{
    // this method works to make user authenticate
    public function authenticate(Request $request){
        
        $validator = Validator::make($request->all(),[
            'email' => 'email|required',
            'password' => 'required|min:5',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ]);
        }else{
            $credentials = [
                'email' => $request->email,
                'password' => $request->password,
            ];

            if(Auth::attempt($credentials)){

                $user = User::find(Auth::user()->id);
                $token = $user->createToken('token')->plainTextToken;
                
                return response()->json([
                    'status' => true,
                    'token' => $token,
                    'id' => Auth::user()->id,
                ]);

            }else{
                return response()->json([
                    'status' => false,
                    'message' => 'Either email or password is incorrect.',
                ]);
            }
        }
    }

    // logout code
    public function logout(){
        // we delete token here from the db
        $user = User::find(Auth::user()->id);
        $user->tokens()->delete();
        
        return response()->json([
            'status' => true,
            'message' => 'Logout successfully.',
        ]);
    }
    
}
