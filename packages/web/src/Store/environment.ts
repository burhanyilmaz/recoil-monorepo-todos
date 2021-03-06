import { atom, useRecoilState } from "recoil";

import { environmentModule } from "@StreeterxsTodos/relay";
import config from "../config";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";

console.log('entrou módulo store environment');

const {
    environment,
    setAuthentication,
    getAuthentication
} = environmentModule(`${config.GRAPHQL_URL}`, localStorage.getItem('authToken'));

export const environmentState = atom<RelayModernEnvironment>({
    key: 'environment',
    default: environment
});

export { setAuthentication, getAuthentication };
