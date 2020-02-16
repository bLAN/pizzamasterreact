import React, { Component, FunctionComponent, ReactNode } from 'react'
import NextApp from 'next/app'
import Head from 'next/head'
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import Wrapper from '../components/Wrapper'

export default class App extends NextApp {
	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles?.parentElement) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}

	render(): JSX.Element {
		const { Component, pageProps } = this.props

		return (
			<>
				<Head>
					<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
					/>
				</Head>

				<StylesProvider injectFirst>
					<CssBaseline />
					<Wrapper>
						<Component {...pageProps} />
					</Wrapper>
				</StylesProvider>
			</>
		)
	}
}
