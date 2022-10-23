import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Link, CardScroll, HorizontalCell, Header, ModalRoot, SplitLayout, ModalPage, PanelHeaderButton, ModalPageHeader, ActionSheet, ActionSheetItem, Tabs, HorizontalScroll, Button, Group, Cell, Div, SimpleCell, TabsItem, Separator } from '@vkontakte/vkui';
import { Icon28LocationOutline, Icon24Cancel, Icon20CheckCircleOn } from '@vkontakte/icons';

const FoodG = ({ id, go, fetchedUser }) => {

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
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
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
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
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
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>
								<HorizontalCell size="l" header="Название" subtitle="Примечание">
									<img
										style={largeImageStyles}
										src="https://img-fotki.yandex.ru/get/26036/1565839.52/0_55bf01_b501fe63_X4L.jpg"
									/>
								</HorizontalCell>

							</CardScroll>
						</Group>
        </div>
    )
};

export default FoodG;