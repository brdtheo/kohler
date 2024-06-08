export type GraphNode<T> = {
  node: T;
};

export type BaseApiResponse<T> = {
  [collectionName: string]: {
    edges: GraphNode<T>[];
  };
};
