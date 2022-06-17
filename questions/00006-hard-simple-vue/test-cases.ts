import type { Equal, Expect } from '@type-challenges/utils'

SimpleVue({
  data() {
    // @ts-expect-error
    this.firstname
    // @ts-expect-error
    this.getRandom()
    // @ts-expect-error
    this.data()

    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    number() {
      return this.amount * 10
    },
    fullname() {
      return `${this.firstname} ${this.lastname}`
    },
    hello() {
      return `hello ${this.fullname}`
    },
  },
  methods: {
    getRandom() {
      return Math.random() + this.number
    },
    hi() {
      const amount = this.amount
      const fullname = this.fullname.toLowerCase()
      const random = this.getRandom()
      return { amount, fullname, random }
    },
    test() {
      const fullname = this.fullname
      const cases: [Expect<Equal<typeof fullname, string>>] = [] as any
    },
  },
})
