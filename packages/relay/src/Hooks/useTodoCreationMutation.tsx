import React, { useEffect, useCallback } from 'react';
import { graphql, Disposable } from 'react-relay';
import { useMutation } from 'react-relay/hooks';

import { UseMutationConfig } from 'react-relay/lib/relay-experimental/useMutation';
// to generate this file, yarn relay:build root package.json script must be executed


const todoCreationMutation = graphql`
    mutation useTodoCreationMutation($content: String!) {
        UserCreation (input: {content: $content, clientMutationId: "2"}) {
            user {
                identifier
                createdAt
                updatedAt
            }
        }
    }
`;

const useTodoCreationMutationHook = () => {
    const useTodoCreationMutationCallback = useCallback(() => useMutation(todoCreationMutation), []);

    useEffect(() => {
        console.log('useEffect useCreationMutation');
    });

    return useTodoCreationMutationCallback;

};

export default useTodoCreationMutationHook;
