import { Resolver, Mutation, Arg } from "type-graphql";
import { Query } from "type-graphql";
import  bcrypt from "bcryptjs"
import { User } from "../../entity/User";
import { RegisterInput } from "./register/registerInput";

@Resolver(User) //it is set to indicate it is resolving for the type user
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "Hello World"
  }

  @Mutation(() => User)
  async register(
     @Arg("data") {email,firstName,lastName,password}: RegisterInput
      ):Promise<User> {
          const hashedPassword = await bcrypt.hash(password,12);
          const user = await User.create({
              firstName,
              lastName,
              email,
              password:hashedPassword
          }).save()
         return user
  }
}