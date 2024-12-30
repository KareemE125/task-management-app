type TComponentWithLoadingProps<T> =
  | { item: T; isLoading?: never }
  | { item?: never; isLoading: boolean }

export default TComponentWithLoadingProps