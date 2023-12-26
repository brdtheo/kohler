type GraphNode<T> = {
  node: T;
};

type BaseApiResponse<T> = {
  [key: string]: {
    edges: GraphNode<T>[];
  };
};

enum AvatarSize {
  SMALL = 'small',
  LARGE = 'large',
}

export { AvatarSize };
export type { GraphNode, BaseApiResponse };
