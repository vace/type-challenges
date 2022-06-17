declare function SimpleVue<Data, Computed, Method>(options: {
  data: (this: unknown) => Data
  computed: Computed & ThisType<Data & Computed>
  methods: Method & ThisType<Data & { [K in keyof Computed]: Computed[K] extends (...args: any[]) => infer Val ? Val : unknown } & Method>
}): any
