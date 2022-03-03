declare const tree: {
    path: string;
    name: string;
    children: {
        path: string;
        name: string;
        children: {
            path: string;
            name: string;
            type: string;
        }[];
        type: string;
    }[];
    type: string;
};
export default tree;
