import React, {useCallback} from 'react';
import {
    ReactFlow,
    Background,
    Controls,
    MiniMap,
    addEdge,
    useNodesState,
    useEdgesState,
    type OnConnect,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {initialNodes, nodeTypes} from './nodes';
import {initialEdges, edgeTypes} from './edges';


const FlowExample: React.FC = () => {
    const [nodes, , onNodesChange] = useNodesState(initialNodes); // 节点状态
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges); // 连线状态
    const onConnect: OnConnect = useCallback(
        (connection) => setEdges((edges) => addEdge(connection, edges)),
        [setEdges]
    );

    return (
        <ReactFlow
            nodes={nodes}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            edges={edges}
            edgeTypes={edgeTypes}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
        >
            <Background />
            <MiniMap />
            <Controls />
        </ReactFlow>
    );
};

export default FlowExample;
