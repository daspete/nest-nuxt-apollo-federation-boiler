import {
    GraphQLDataSourceProcessOptions,
    RemoteGraphQLDataSource,
} from '@apollo/gateway';
import { GraphQLDataSourceRequestKind } from '@apollo/gateway/dist/datasources/types';

export class GraphQLDataSource extends RemoteGraphQLDataSource {
    didReceiveResponse({ response, context }): typeof response {
        const token = response.http.headers.get('authorization');

        if (token) {
            context.req.res.cookie('jwt', token.replace('Bearer ', ''), {
                httpOnly: true,
            });
        }

        return response;
    }

    willSendRequest(params: GraphQLDataSourceProcessOptions) {
        const { request, context, kind } = params;
        // console.log('headers', context?.req?.res.cookie('jwt'));

        if (kind === GraphQLDataSourceRequestKind.INCOMING_OPERATION) {
            const cookie =
                params?.incomingRequestContext.request.http.headers.get(
                    'cookie',
                );

            // request.http.headers.set('cookie', cookie);
            console.log('token', cookie);
            // if (token) {
            //     request.http.headers.set('authorization', token);
            // }
        }
    }
}
