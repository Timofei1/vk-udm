import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, Panel, AppRoot, RichCell, CardGrid, ContentCard, UsersStack, Tabbar, TabbarItem, Group, Epic, ConfigProvider, SplitLayout, SplitCol, Button, PopoutWrapper, Div, Cell, ModalDismissButton, Snackbar, Avatar, Separator, PanelHeader } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Icon56ErrorTriangleOutline, Icon24Error, Icon16Done, Icon28InfoCircleOutline, Icon28UserCircleOutline, Icon28LocationMapOutline, Icon28BillheadOutline, Icon28ArticleOutline } from '@vkontakte/icons';
import { usePlatform, withAdaptivity } from '@vkontakte/vkui';
import { ViewWidth } from '@vkontakte/vkui';
import { VKCOM } from '@vkontakte/vkui';

import Home from './panels/Home';
import Food from './panels/Food';
import Route from './panels/Route';
import Event from './panels/Event';
import Tools from './panels/Tools';

const App = () => {
	const [scheme, setScheme] = useState('bright_light')
	const [activePanel, setActivePanel] = useState('home');
	const [activeStory, setActiveStory] = React.useState('home')
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(/*<ScreenSpinner size='large' />*/null);
	const [paramStart, setStart] = useState(null);
	const [platform1, setPlatform] = useState(null)
	


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
											Места
										</Cell>
										<Cell
											disabled={activeStory === "food"}
											onClick={() => { setActiveStory("food"), setActivePanel('food') }}
											before={<Icon28BillheadOutline />}
										>
											Еда
										</Cell>
										<Cell
											disabled={activeStory === "route"}
											onClick={() => setActiveStory("route")}
											before={<Icon28LocationMapOutline />}
										>
											Маршруты
										</Cell>
										<Cell
											disabled={activeStory === "event"}
											onClick={() => setActiveStory("event")}
											before={<Icon28UserCircleOutline />}
										>
											Мероприятия
										</Cell>
										<Cell
											disabled={activeStory === "tools"}
											onClick={() => setActiveStory("tools")}
											before={<Icon28InfoCircleOutline />}
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
										text="Места"
									>
										<Icon28ArticleOutline />
									</TabbarItem>
									<TabbarItem
										selected={activeStory === "food"}
										onClick={() => { setActiveStory("food"), setActivePanel('food') }}
										text="Еда"
									>
										<Icon28BillheadOutline />
									</TabbarItem>
									<TabbarItem
										selected={activeStory === "route"}
										onClick={() => setActiveStory("route")}
										text="Маршруты"
									>
										<Icon28LocationMapOutline />
									</TabbarItem>
									<TabbarItem
										selected={activeStory === "event"}
										onClick={() => setActiveStory("event")}
										text="Мероприятия"
									>
										<Icon28UserCircleOutline />
									</TabbarItem>
									<TabbarItem
										selected={activeStory === "tools"}
										onClick={() => setActiveStory("tools")}
										text="Инструменты"
									>
										<Icon28InfoCircleOutline />
									</TabbarItem>
								</Tabbar>
							}>
								<View id='home' activePanel={activePanel}>
									<Home id='home' go={go} />
								</View>
								<View id='food' activePanel={activePanel}>
									<Food id='food' go={go} />
								</View>
								<View id='route' activePanel={'route'}>
									<Route id='route' go={go} />
								</View>
								<View id='event' activePanel={'event'}>
									<Event id='event' go={go} />
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
