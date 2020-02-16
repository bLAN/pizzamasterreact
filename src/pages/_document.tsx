import React from 'react'
import NextDocument from 'next/document'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles'
import { AppType, DocumentContext } from 'next/dist/next-server/lib/utils'

export default class Document extends NextDocument {
	static async getInitialProps(ctx: DocumentContext) {
		const styledComponentSheet = new StyledComponentSheets()
		const materialUiSheet = new MaterialUiServerStyleSheets()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () => originalRenderPage({
				enhanceApp: (App: AppType) => (props: any) =>
					styledComponentSheet.collectStyles(
						materialUiSheet.collect(<App {...props} />)
					)
			})

			const initialProps = await NextDocument.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{materialUiSheet.getStyleElement()}
						{styledComponentSheet.getStyleElement()}
					</>
				)
			}
		} finally {
			styledComponentSheet.seal()
		}
	}
}
