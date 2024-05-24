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

  createGrid(height, width) {
    // Create grid by inserting all nodes,
    // then all edges to right and bottom
    // of a given node (if applicable)
   const totalNodes = height * width;

    for (let i = 0; i < totalNodes; i++) {
      this.addNode(i);
    }

    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        const node = row * width + col;

        if (col < width - 1) {
          const rightNeighbor = node + 1;
          this.addEdge(node, rightNeighbor);
        }

        if (row < height - 1) {
          const bottomNeighbor = node + width;
          this.addEdge(node, bottomNeighbor);
        }
      }
    }
  }

  getNeighbours(node) {
    return this.graph[node]
  }

  bfs(sourceNode, targetNode) {
    let queue = [];
    let parents = {};
    queue.push(sourceNode);
    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode === targetNode) return parents;
      const neighbours = this.getNeighbours(currentNode);
      for (let neighbour of neighbours) {
        if (neighbour in parents) continue;
        parents[neighbour] = currentNode;
        queue.push(neighbour)
      }
    }
  }
}