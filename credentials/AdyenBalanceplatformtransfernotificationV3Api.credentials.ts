import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AdyenBalanceplatformtransfernotificationV3Api implements ICredentialType {
        name = 'N8nDevAdyenBalanceplatformtransfernotificationV3Api';

        displayName = 'Adyen Balanceplatformtransfernotification V3 API';

        icon: Icon = { light: 'file:../nodes/AdyenBalanceplatformtransfernotificationV3/adyen-balanceplatformtransfernotification-v3.svg', dark: 'file:../nodes/AdyenBalanceplatformtransfernotificationV3/adyen-balanceplatformtransfernotification-v3.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://balanceplatform-api-test.adyen.com/btl/v3',
                        required: true,
                        placeholder: 'https://balanceplatform-api-test.adyen.com/btl/v3',
                        description: 'The base URL of your Adyen Balanceplatformtransfernotification V3 API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-Key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
