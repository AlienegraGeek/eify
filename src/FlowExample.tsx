import React from 'react';
import ReactFlow, {Background, BackgroundVariant, Controls, Edge, Node} from 'reactflow';
import 'reactflow/dist/style.css'; // 引入 React Flow 的样式

const initialNodes: Node[] = [
    {
        id: '1',
        position: {x: 100, y: 100},
        data: {label: 'Node 1'},
        type: 'default',
    },
    {
        id: '2',
        position: {x: 300, y: 100},
        data: {label: 'Node 2'},
        type: 'default',
    },
];

const initialEdges: Edge[] = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        animated: true,
    },
];

const FlowExample: React.FC = () => {
    return (
        <div style={{height: '500px', width: '100%'}}>
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                fitView
            >
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default FlowExample;
