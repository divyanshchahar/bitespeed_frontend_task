import CustomTextNodeLayout from '../ui/layouts/CustomTextNodeLayout';

// attributes in this object should be same as the nmae of the node and the value of that attribute
// should the ui that needs to be rendered when that node is adeed to the flow
export const nodeTypes = { customTextNode: CustomTextNodeLayout };

// This list contains the following
// 1. name of the node
// 2. Text to be displayed on the button for add ing the node to the flow

// #########################
// # HOW TO ADD MORE NODES #
// #########################
//
// To add more nodes to the flow add more objects in the array below and add their UI in nodeTypes object
//

export const nodesList = [
	{
		name: 'customTextNode',
		displayText: 'Message',
	},
];
