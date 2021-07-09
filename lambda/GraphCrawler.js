export class GraphCrawler {

    constructor(graph){
        this.graph = graph;
        this.GraphNode = graph.listOfNode[0];
    }

    next(userChoice){
        this.GraphNode = (this.graph).nodes[(this.GraphNode)].children[userChoice];
    }

    getReply(){
        return (this.graph).nodes[(this.GraphNode)].reply;
    }

}

