import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
            driver: ApolloGatewayDriver,
            gateway: {
                buildService({ url }) {
                    return new RemoteGraphQLDataSource({
                        url,
                        apq: true,
                        willSendRequest({ request, context }) {
                            if (context?.req) {
                                const token = context.req.cookies['jwt'];

                                request.http.headers.set(
                                    'authorization',
                                    token,
                                );
                            }
                        },
                    });
                },
                supergraphSdl: new IntrospectAndCompose({
                    subgraphs: [
                        {
                            name: 'auth',
                            url: 'http://microservice-auth:3000/graphql',
                        },
                        {
                            name: 'players',
                            url: 'http://microservice-players:3000/graphql',
                        },
                        {
                            name: 'games',
                            url: 'http://microservice-games:3000/graphql',
                        },
                    ],
                    pollIntervalInMs: 5000,
                }),
            },
        }),
    ],
})
export class GatewayModule {}
