import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Link, CardScroll, HorizontalCell, Header, ModalRoot, SplitLayout, ModalPage, PanelHeaderButton, ModalPageHeader, ActionSheet, ActionSheetItem, Tabs, HorizontalScroll, Button, Group, Cell, Div, SimpleCell, TabsItem, Separator } from '@vkontakte/vkui';
import { Icon28LocationOutline, Icon24Cancel, Icon20CheckCircleOn } from '@vkontakte/icons';

const FoodV = ({ id, go, fetchedUser }) => {

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
                <Header aside={<Link>Показать все</Link>}>Достопримечательности</Header>
            }>
                <CardScroll size="false">
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>

                </CardScroll>
            </Group>
            <Group header={
                <Header aside={<Link>Показать все</Link>}>Музеи</Header>
            }>
                <CardScroll size="false">
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
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
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://media.nazaccent.ru/cache/8b/f3/8bf376773bfc6c2928c75fa06b3fc7dd.jpg"
                        />
                    </HorizontalCell>

                </CardScroll>
            </Group>
        </div>
    )
};

export default FoodV;