import {  Length, IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExist";

@InputType()
export class RegisterInput {

      @Field() 
      @Length(1,30,{message:"The length must be more than 1"})
      firstName:string;

      @Field() 
      @Length(1,255)
      lastName:string;

      @Field() 
      @IsEmail()
      @IsEmailAlreadyExist({message:"email already exist"})
      email:string; 

      @Field() 
      password:string;
}