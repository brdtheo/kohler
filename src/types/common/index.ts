type GraphNode<T> = {
  node: T;
};

type BaseApiResponse<T> = {
  [key: string]: {
    edges: GraphNode<T>[];
  };
};

export type { GraphNode, BaseApiResponse };
