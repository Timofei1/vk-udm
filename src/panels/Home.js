import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Link, CardScroll, HorizontalCell, Header, ModalRoot, SplitLayout, ModalPage, PanelHeaderButton, ModalPageHeader, ActionSheet, ActionSheetItem, Tabs, HorizontalScroll, Button, Group, Cell, Div, SimpleCell, TabsItem, Separator } from '@vkontakte/vkui';
import { Icon28LocationOutline, Icon24Cancel } from '@vkontakte/icons';

const Home = ({ id, go, openSelectable }) => {
	const [selected, setSelected] = React.useState("places");
	const [isModalOpened_Loc, setModalOpened_Loc] = React.useState(false);
	const [location, setLocation] = React.useState("izhevsk")

	const MODAL_Loc = '1'

	const largeImageStyles = {
		width: 220,
		height: 124,
		borderRadius: 8,
		border: "1px solid var(--vkui--color_image_placeholder_alpha)",
		objectFit: "cover",
	};

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
				<SimpleCell onClick={() => { setLocation("izhevsk"), console.log(location) }}>Ижевск</SimpleCell>
				<SimpleCell onClick={() => { setLocation("votkinsk"), console.log(location) }}>Воткинск</SimpleCell>
				<SimpleCell onClick={() => { setLocation("glazov"), console.log(location) }}>Глазов</SimpleCell>
				<SimpleCell onClick={() => { setLocation("sarapul"), console.log(location) }}>Сарапул</SimpleCell>
				<SimpleCell onClick={() => { setLocation("mozhga"), console.log(location) }}>Можга</SimpleCell>
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
					{location === 'mozhga' && <div>Можга</div>}
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
								selected={selected === "hotels"}
								onClick={() => setSelected("hotels")}
							>
								Еда
							</TabsItem>
							<TabsItem
								selected={selected === "news"}
								onClick={() => setSelected("news")}
							>
								Мероприятия
							</TabsItem>
						</HorizontalScroll>
					</Tabs>
				</Group>
				{selected === "places" && ///////////////////////////// МЕСТА //////////////////////////
					<div>
						{location === 'izhevsk' && ///////////////////////////// МЕСТА ИЖЕВСКА //////////////////////////
						<Group header={
							<Header aside={<Link>Показать все</Link>}>Достопримечательности</Header>
						}>
							<CardScroll size="false">
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
						
							</CardScroll>
						</Group>}
						{location === 'votkinsk' && ///////////////////////////// МЕСТА ВОТКИНСКА //////////////////////////
						<Group header={
							<Header aside={<Link>Показать все</Link>}>Достопримечательности</Header>
						}>
							<CardScroll size="false">
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://trave-l.ru/img/votkinsk/votkinsk01.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://trave-l.ru/img/votkinsk/votkinsk01.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://trave-l.ru/img/votkinsk/votkinsk01.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://trave-l.ru/img/votkinsk/votkinsk01.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://trave-l.ru/img/votkinsk/votkinsk01.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://trave-l.ru/img/votkinsk/votkinsk01.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://trave-l.ru/img/votkinsk/votkinsk01.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://trave-l.ru/img/votkinsk/votkinsk01.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://trave-l.ru/img/votkinsk/votkinsk01.jpg"
									/>
								</HorizontalCell>
						
							</CardScroll>
						</Group>}
						<Group header={
							<Header aside={<Link>Показать все</Link>}>Музеи</Header>
						}>
							<CardScroll size="false">
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>

							</CardScroll>
						</Group>
						<Group header={
							<Header aside={<Link>Показать все</Link>}>Развлечения</Header>
						}>
							<CardScroll size="false">
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>

							</CardScroll>
						</Group>
					</div>
				}
				{
					selected === "hotels" &&
					<div>

						<Group header={
							<Header aside={<Link>Показать все</Link>}>Национальная кухня</Header>
						}>
							<CardScroll size="false">
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-global.cpcdn.com/recipes/0ec5ed844c474621/680x482cq70/pieriepiechi-udmurtskaia-kukhnia-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-global.cpcdn.com/recipes/0ec5ed844c474621/680x482cq70/pieriepiechi-udmurtskaia-kukhnia-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-global.cpcdn.com/recipes/0ec5ed844c474621/680x482cq70/pieriepiechi-udmurtskaia-kukhnia-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-global.cpcdn.com/recipes/0ec5ed844c474621/680x482cq70/pieriepiechi-udmurtskaia-kukhnia-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-global.cpcdn.com/recipes/0ec5ed844c474621/680x482cq70/pieriepiechi-udmurtskaia-kukhnia-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-global.cpcdn.com/recipes/0ec5ed844c474621/680x482cq70/pieriepiechi-udmurtskaia-kukhnia-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-global.cpcdn.com/recipes/0ec5ed844c474621/680x482cq70/pieriepiechi-udmurtskaia-kukhnia-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-global.cpcdn.com/recipes/0ec5ed844c474621/680x482cq70/pieriepiechi-udmurtskaia-kukhnia-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-global.cpcdn.com/recipes/0ec5ed844c474621/680x482cq70/pieriepiechi-udmurtskaia-kukhnia-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg"
									/>
								</HorizontalCell>

							</CardScroll>
						</Group>
						<Group header={
							<Header aside={<Link>Показать все</Link>}>Фастфуд</Header>
						}>
							<CardScroll size="false">
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>

							</CardScroll>
						</Group>
						<Group header={
							<Header aside={<Link>Показать все</Link>}>Рестораны</Header>
						}>
							<CardScroll size="false">
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://autotravel.ru/phalbum/91067/148.jpg"
									/>
								</HorizontalCell>

							</CardScroll>
						</Group>
					</div>
				}
				{
					selected === "news" &&
					<Group mode={<Header>Горячие новости</Header>}>
						nope
					</Group>
				}
			</Panel>
		</SplitLayout>
	)
};

export default Home;