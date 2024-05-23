class Graph {
  constructor() {
    this.graph =  {};
  }

  addNode(node) {
    this.graph[node] = [];
  }

  addEdge(sourceNode, targetNode) {
    this.graph[sourceNode].push(targetNode);
    this.graph[targetNode].push(sourceNode);
  }

  removeEdge(sourceNode, targetNode) {
    this.graph[sourceNode] = this.graph[sourceNode].filter((node) => node !== targetNode);
    this.graph[targetNode] = this.graph[targetNode].filter((node) => node !== sourceNode);
  }

  hasEdge(sourceNode, targetNode) {
    return this.graph[sourceNode].includes(targetNode);
  }
}