export class UserDomain {
  constructor(
    private readonly ctx: {
      // req.user みたいなのに認証結果を入れられれば理想
      user: any
    }
  ) {
    console.log('userコンストラクタが生成されたよ！')
  }

  async getUser(id: string) {
    const users = await this.getUsers()
    return users.find(user => user.id === id)
  }

  async getUsers() {
    return [
      {
        id: '1',
        name: 'bocchi',
        part: 'guitar',
        birthday: '21 Feb',
        blood: 'O',
        height: '156',
      },
      {
        id: '2',
        name: 'nijika',
        part: 'drums',
        birthday: '29 May',
        blood: 'A',
        height: '154',
      },
      {
        id: '3',
        name: 'ryo',
        part: 'bass',
        birthday: '18 Sep',
        blood: 'AB',
        height: '163',
      },
      {
        id: '4',
        name: 'kita',
        part: 'vocal',
        birthday: '21 Apr',
        blood: 'A',
        height: '158',
      },
    ] as const
  }
}
