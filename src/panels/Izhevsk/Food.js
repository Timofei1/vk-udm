import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Link, CardScroll, HorizontalCell, Header, ModalRoot, SplitLayout, ModalPage, PanelHeaderButton, ModalPageHeader, ActionSheet, ActionSheetItem, Tabs, HorizontalScroll, Button, Group, Cell, Div, SimpleCell, TabsItem, Separator } from '@vkontakte/vkui';
import { Icon28LocationOutline, Icon24Cancel, Icon20CheckCircleOn } from '@vkontakte/icons';

const FoodI = ({ id, go, fetchedUser }) => {

    const largeImageStyles = {
		width: 220,
		height: 124,
		borderRadius: 8,
		border: "1px solid var(--vkui--color_image_placeholder_alpha)",
		objectFit: "cover",
	};

    return (
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
							<Header aside={<Link>Показать все</Link>}>Рестораны</Header>
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
        </div>
    )
};

export default FoodI;