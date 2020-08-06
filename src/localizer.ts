import * as vscode from 'vscode';

export class Localizer {
	availableLangs: Array<string> = ['en', 'fr'];
	messages: any = {
		en: {
			general: {
				cantDisplayContent: "This format can't be displayed!",
				operationCancelled: 'Operation cancelled!',
				prompt: {
					decode: 'Enter the Base64 string to decode',
					encode: 'Choose the file you want to encode to a Base 64 string...',
				},
				title: 'Base64 Viewer',
				unknownType: 'Unknown type',
			},
			pdf: {
				encodedString: {
					button: 'Switch to Base64 Encoded File',
				},
				orderedElements: {
					images: {
						title: 'PDF Images List',
					},
					text: {
						button: 'Switch to Ordered PDF Text Elements',
						title: 'Ordered PDF Text Elements',
					},
				},
				page: 'Page',
			},
		},
		fr: {
			general: {
				cantDisplayContent: 'Ce contenu ne peut pas être affiché !',
				operationCancelled: 'Opération annulée !',
				prompt: {
					decode: 'Entrez la chaîne Base64 à décoder',
					encode: 'Choisissez le fichier que vous souhaitez encoder en Base64...',
				},
				title: 'Visionneur Base64',
				unknownType: 'Type inconnu',
			},
			pdf: {
				encodedString: {
					button: 'Voir le fichier encodé en Base64',
				},
				orderedElements: {
					images: {
						title: 'Liste des Images du PDF',
					},
					text: {
						button: 'Voir les Éléments de Texte du PDF',
						title: 'Éléments de Texte du PDF Ordonnés',
					},
				},
				page: 'Page',
			},
		},
	};

	constructor() {}

	public getLocalizedMessages(): any {
		const config = JSON.parse(process.env.VSCODE_NLS_CONFIG || "{'locale': 'en'}");
		const locale = this.availableLangs.indexOf(config.locale) !== -1 ? config.locale : 'en';

		return this.messages[locale];
	}
}
