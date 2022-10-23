import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Link, CardScroll, HorizontalCell, Header, ModalRoot, SplitLayout, ModalPage, PanelHeaderButton, ModalPageHeader, ActionSheet, ActionSheetItem, Tabs, HorizontalScroll, Button, Group, Cell, Div, SimpleCell, TabsItem, Separator } from '@vkontakte/vkui';
import { Icon28LocationOutline, Icon24Cancel, Icon20CheckCircleOn } from '@vkontakte/icons';

/* import plases */
import PlasesI from './Izhevsk/Plases';
import PlasesG from './Glazov/Plases';
import PlasesV from './Votkinsk/Plases';
import PlasesS from './Sarapul/Plases';

/* import food */
import FoodI from './Izhevsk/Food';
import FoodG from './Glazov/Food';
import FoodV from './Votkinsk/Food';
import FoodS from './Sarapul/Food';

/* import events */
import EventsG from './Glazov/Events';
import EventsI from './Izhevsk/Events';
import EventsS from './Sarapul/Events';
import EventsV from './Votkinsk/Events';

const Home = ({ id, go, changeLocationVotkinsk, changeLocationIzhevsk, changeLocationSarapul, changeLocationGlazov, location }) => {
	const [selected, setSelected] = React.useState("places");
	const [isModalOpened_Loc, setModalOpened_Loc] = React.useState(false);

	const MODAL_Loc = '1'

	const largeImageStyles = {
		width: 220,
		height: 124,
		borderRadius: 8,
		border: "1px solid var(--vkui--color_image_placeholder_alpha)",
		objectFit: "cover",
	};

	const Izhevsk = () => {
		setModalOpened_Loc(false)
	}

	const modalloc = (
		<ModalRoot
			activeModal={isModalOpened_Loc ? MODAL_Loc : null}
			onClose={() => setModalOpened_Loc(false)}
		>
			<ModalPage
				dynamicContentHeight
				id={MODAL_Loc}
				onClose={() => setModalOpened_Loc(false)}

				header={
					<ModalPageHeader
						right={<PanelHeaderButton onClick={() => setModalOpened_Loc(false)} aria-label='Закрыть'>
							<Icon24Cancel />
						</PanelHeaderButton>}
					>
						Выбор города
					</ModalPageHeader>
				}
			>
				<SimpleCell after={location === 'izhevsk' && <Icon20CheckCircleOn />} onClick={changeLocationIzhevsk}>Ижевск</SimpleCell>
				<SimpleCell after={location === 'votkinsk' && <Icon20CheckCircleOn />} onClick={changeLocationVotkinsk}>Воткинск</SimpleCell>
				<SimpleCell after={location === 'glazov' && <Icon20CheckCircleOn />} onClick={changeLocationGlazov}>Глазов</SimpleCell>
				<SimpleCell after={location === 'sarapul' && <Icon20CheckCircleOn />} onClick={changeLocationSarapul}>Сарапул</SimpleCell>
				<Div /><Div /><Div />
			</ModalPage>
		</ModalRoot>
	);

	return (
		<SplitLayout modal={modalloc}>
			{console.log(location)}
			<Panel id={id}>
				<PanelHeader left={<Button before={<Icon28LocationOutline />} onClick={() => setModalOpened_Loc(true)}></Button>}>
					{location === 'izhevsk' && <div>Ижевск</div>}
					{location === 'votkinsk' && <div>Воткинск</div>}
					{location === 'glazov' && <div>Глазов</div>}
					{location === 'sarapul' && <div>Сарапул</div>}
				</PanelHeader>
				<Group>
					<Tabs>
						<HorizontalScroll arrowSize="m">
							<TabsItem
								selected={selected === "places"}
								onClick={() => setSelected("places")}
							>
								Места
							</TabsItem>
							<TabsItem
								selected={selected === "events"}
								onClick={() => setSelected("events")}
							>
								Мероприятия
							</TabsItem>
							<TabsItem
								selected={selected === "food"}
								onClick={() => setSelected("food")}
							>
								Еда
							</TabsItem>
						</HorizontalScroll>
					</Tabs>
				</Group>
				{selected === "places" && ///////////////////////////// МЕСТА //////////////////////////
					<div>
						{location === 'izhevsk' &&
							<PlasesI go={go}/>
						}
						{location === 'votkinsk' &&
							<PlasesV />
						}
						{location === 'glazov' &&
							<PlasesG />
						}
						{location === 'sarapul' &&
							<PlasesS />
						}
					</div>
				}
				{
					selected === "food" &&
					<div>
						{location === 'izhevsk' &&
							<FoodI />
						}
						{location === 'votkinsk' &&
							<FoodV />
						}
						{location === 'glazov' &&
							<FoodG />
						}
						{location === 'sarapul' &&
							<FoodS />
						}
					</div>
				}
				{
					selected === "events" &&
					<div>
						{location === 'izhevsk' &&
							<EventsI />
						}
						{location === 'votkinsk' &&
							<EventsV />
						}
						{location === 'glazov' &&
							<EventsG />
						}
						{location === 'sarapul' &&
							<EventsS />
						}
					</div>
				}
			</Panel>
		</SplitLayout>
	)
};

export default Home;