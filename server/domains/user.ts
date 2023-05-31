export class UserDomain {
  constructor(
    private readonly ctx: {
      // req.user みたいなのに認証結果を入れられれば理想
      user: any
    }
  ) {
    console.log('userコンストラクタが生成されたよ！')
  }

  async getUsers() {
    return [
      {
        id: '1',
        name: 'bocchi',
        part: 'guitar',
      } as const,
      {
        id: '2',
        name: 'nijika',
        part: 'drums',
      } as const,
    ] as const
  }
}
