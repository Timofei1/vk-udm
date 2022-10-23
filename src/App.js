import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, Panel, AppRoot, ActionSheet, ActionSheetItem, ContentCard, UsersStack, Tabbar, TabbarItem, Group, Epic, ConfigProvider, SplitLayout, SplitCol, Button, PopoutWrapper, Div, Cell, ModalDismissButton, Snackbar, Avatar, Separator, PanelHeader } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Icon28Newsfeed, Icon28HomeOutline, Icon28SettingsOutline, Icon28InfoCircleOutline, Icon28UserCircleOutline, Icon28LocationMapOutline, Icon28BillheadOutline, Icon28ArticleOutline } from '@vkontakte/icons';
import { usePlatform, withAdaptivity } from '@vkontakte/vkui';
import { ViewWidth } from '@vkontakte/vkui';
import { VKCOM } from '@vkontakte/vkui';

import Home from './panels/Home';
import News from './panels/News';
import Route from './panels/Route';
import Hotels from './panels/Hotels';
import Tools from './panels/Tools';

const App = () => {
	const [scheme, setScheme] = useState('bright_light')
	const [activePanel, setActivePanel] = useState('home');
	const [activeStory, setActiveStory] = React.useState('home')
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(/*<ScreenSpinner size='large' />*/null);
	const [paramStart, setStart] = useState(null);
	const [platform1, setPlatform] = useState(null)
	const onClose = () => setPopout(null);
	const onChange = (e) => setFilter(e.target.value);
	const [filter, setFilter] = React.useState("best");
	const selectableTargetRef = React.useRef();	
	const [location, setLocation] = React.useState('izhevsk')

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data } }) => {
			if (type === 'VKWebAppUpdateConfig') {
				setScheme(data.scheme)
			}
			if (type === 'VKWebAppGetLaunchParamsResult') {
				setPlatform(data.vk_platform)
			}
		});

		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();

		async function paramStart() {
			const start = await bridge.send("VKWebAppGetLaunchParams");
			setStart(start);
			setPopout(null);

		}
		paramStart()
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	async function changeLocationIzhevsk() {
		setLocation('izhevsk')
	}

	async function changeLocationVotkinsk() {
		setLocation('votkinsk')
	}

	async function changeLocationGlazov() {
		setLocation('glazov')
	}
	async function changeLocationSarapul() {
		setLocation('sarapul')
	}

	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}
						header={<PanelHeader separator={false} />}
						style={{ justifyContent: "center" }}
					>
						{(platform1 === 'desktop_web') &&
							<SplitCol fixed width={280} maxWidth={280}>
								<Panel>
									{<PanelHeader />}
									<Group>
										<Cell
											disabled={activeStory === "home"}
											onClick={() => { setActiveStory("home"), setActivePanel('home') }}
											before={<Icon28ArticleOutline />}
										>
											Главная
										</Cell>
										<Cell
											disabled={activeStory === "hotels"}
											onClick={() => { setActiveStory("hotels"), setActivePanel('hotels') }}
											before={<Icon28HomeOutline />}
										>
											Жильё
										</Cell>
										<Cell
											disabled={activeStory === "route"}
											onClick={() => setActiveStory("route")}
											before={<Icon28Newsfeed />}
										>
											Маршруты
										</Cell>
										<Cell
											disabled={activeStory === "news"}
											onClick={() => {setActiveStory("news"), console.log(location)}}
											before={<Icon28UserCircleOutline />}
										>
											Новости
										</Cell>
										<Cell
											disabled={activeStory === "tools"}
											onClick={() => setActiveStory("tools")}
											before={<Icon28SettingsOutline />}
										>
											Инструменты
										</Cell>
									</Group>
								</Panel>
							</SplitCol>}

						<SplitCol
							animate={platform1 !== 'desktop_web'}
							spaced={platform1 === 'desktop_web'}
							width={platform1 === 'desktop_web' ? "560px" : "100%"}
							maxWidth={platform1 === 'desktop_web' ? "560px" : "100%"}>
							<Epic activeStory={activeStory} tabbar={
								(platform1 !== 'desktop_web') &&
								<Tabbar shadow={false}>
									<TabbarItem
										selected={activeStory === "home"}
										onClick={() => { setActiveStory("home"), setActivePanel('home') }}
										text="Главная"
									>
										<Icon28ArticleOutline />
									</TabbarItem>
									<TabbarItem
										selected={activeStory === "hotels"}
										onClick={() => { setActiveStory("hotels"), setActivePanel('hotels') }}
										text="Жильё"
									>
										<Icon28HomeOutline />
									</TabbarItem>
									<TabbarItem
										selected={activeStory === "route"}
										onClick={() => setActiveStory("route")}
										text="Маршруты"
									>
										<Icon28LocationMapOutline />
									</TabbarItem>
									<TabbarItem
										selected={activeStory === "news"}
										onClick={() => {setActiveStory("news"), console.log(location)}}
										text="Новости"
									>
										<Icon28Newsfeed />
									</TabbarItem>
									<TabbarItem
										selected={activeStory === "tools"}
										onClick={() => setActiveStory("tools")}
										text="Инструменты"
									>
										<Icon28SettingsOutline />
									</TabbarItem>
								</Tabbar>
							}>
								<View id='home' activePanel={activePanel}>
									<Home id='home' go={go} changeLocationVotkinsk={changeLocationVotkinsk} changeLocationIzhevsk={changeLocationIzhevsk} changeLocationSarapul={changeLocationSarapul} changeLocationGlazov={changeLocationGlazov}  location={location}/>
								</View>
								<View id='news' activePanel='news'>
									<News id='news' go={go} />
								</View>
								<View id='route' activePanel={'route'}>
									<Route id='route' go={go} />
								</View>
								<View id='hotels' activePanel={'hotels'}>
									<Hotels id='hotels' go={go} />
								</View>
								<View id='tools' activePanel={'tools'}>
									<Tools id='tools' go={go} />
								</View>
							</Epic>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider >
	);
}

export default App;
