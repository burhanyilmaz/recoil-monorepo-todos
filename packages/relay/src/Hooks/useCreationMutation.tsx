import React, { useEffect, useCallback } from 'react';
import { graphql, Disposable } from 'react-relay';
import { useMutation } from 'react-relay/hooks';

import { UseMutationConfig } from 'react-relay/lib/relay-experimental/useMutation';
// to generate this file, yarn relay:build root package.json script must be executed
import { useCreationMutation } from './__generated__/useCreationMutation.graphql';


const userCreationMutation = graphql`
    mutation useCreationMutation($identifier: String!) {
        UserCreation (input: {identifier: $identifier, clientMutationId: "1"}) {
            user {
                identifier
                createdAt
                updatedAt
            }
        }
    }
`;

const useCreationMutationHook = () => {
    const userCreationMutationCallback = useCallback(() => useMutation<useCreationMutation>(userCreationMutation), []);

    useEffect(() => {
        console.log('useEffect useCreationMutation');
    });

    return userCreationMutationCallback;

};

export default useCreationMutationHook;
