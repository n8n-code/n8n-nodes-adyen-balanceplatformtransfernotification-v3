import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AdyenBalanceplatformtransfernotificationV3 implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Adyen Balanceplatformtransfernotification V3',
		name: 'N8nDevAdyenBalanceplatformtransfernotificationV3',
		icon: { light: 'file:./adyen-balanceplatformtransfernotification-v3.svg', dark: 'file:./adyen-balanceplatformtransfernotification-v3.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Adyen sends webhook notifications for platform transfers.',
		defaults: { name: 'Adyen Balanceplatformtransfernotification V3' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAdyenBalanceplatformtransfernotificationV3Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
