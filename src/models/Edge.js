export default class Edge {

    /**
     *
     * @param {import("./Node.js").default} node1
     * @param {import("./Node.js").default} node2
     */
    constructor(node1, node2) {
        this.node1 = node1;
        this.node2 = node2;
        this.visited = false;
    }

    /**
     *
     * @param {import("./Node.js").default} node
     * @returns {import("./Node.js").default} the other node
     */
    getOtherNode(node) {
        return node === this.node1 ? this.node2 : this.node1;
    }

    /**
     *
     * @returns weight of the edge
     */
    get weight() {
        return Math.hypot(this.node1.latitude - this.node2.latitude, this.node1.longitude - this.node2.longitude);
    }
}
