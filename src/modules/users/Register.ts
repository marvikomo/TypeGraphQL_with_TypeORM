import { Resolver, Mutation, Arg } from "type-graphql";
import { Query } from "type-graphql";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "Hello World"
  }

  @Mutation(() => String)
  async register(@Arg('firstName') firstName:string) {
    return firstName
  }
}