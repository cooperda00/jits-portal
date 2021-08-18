export type IDummyUser = Faker.Card;

export type DummyUsers = IDummyUser[];

export interface IUsersData {
  users: DummyUsers;
}
