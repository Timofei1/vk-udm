import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, HorizontalCell, SimpleCell, Footer, Div, Search, Avatar, ModalRoot, SplitLayout, ModalPage, PanelHeaderButton, ModalPageHeader, Separator, Card, CardGrid } from '@vkontakte/vkui';
import { Icon28LocationOutline, Icon24Cancel, Icon20CheckCircleOn } from '@vkontakte/icons';

const News = ({ id, go, changeLocationVotkinsk, changeLocationIzhevsk, changeLocationSarapul, changeLocationGlazov, location }) => {
    const [isModalOpened_Loc, setModalOpened_Loc] = React.useState(false);

    const MODAL_Loc = '1'

    const largeImageStyles = {
        width: '100%',
        height: '100%',
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
                <CardGrid size="m">
                    <Card>
                        <img
                            style={largeImageStyles}
                            src="https://s16.stc.yc.kpcdn.net/share/i/12/12781786/wr-750.webp"
                        /><br/>Название новости
                    </Card>
                    <Card>
                        <img
                            style={largeImageStyles}
                            src="https://s16.stc.yc.kpcdn.net/share/i/12/12781786/wr-750.webp"
                        /><br/>Название новости
                    </Card>
                </CardGrid>
                <CardGrid size="m">
                    <Card>
                        <img
                            style={largeImageStyles}
                            src="https://s16.stc.yc.kpcdn.net/share/i/12/12781786/wr-750.webp"
                        /><br/>Название новости
                    </Card>
                    <Card>
                        <img
                            style={largeImageStyles}
                            src="https://s16.stc.yc.kpcdn.net/share/i/12/12781786/wr-750.webp"
                        /><br/>Название новости
                    </Card>
                </CardGrid>
                <CardGrid size="m">
                    <Card>
                        <img
                            style={largeImageStyles}
                            src="https://s16.stc.yc.kpcdn.net/share/i/12/12781786/wr-750.webp"
                        /><br/>Название новости
                    </Card>
                    <Card>
                        <img
                            style={largeImageStyles}
                            src="https://s16.stc.yc.kpcdn.net/share/i/12/12781786/wr-750.webp"
                        /><br/>Название новости
                    </Card>
                </CardGrid>
                <CardGrid size="m">
                    <Card>
                        <img
                            style={largeImageStyles}
                            src="https://s16.stc.yc.kpcdn.net/share/i/12/12781786/wr-750.webp"
                        /><br/>Название новости
                    </Card>
                    <Card>
                        <img
                            style={largeImageStyles}
                            src="https://s16.stc.yc.kpcdn.net/share/i/12/12781786/wr-750.webp"
                        /><br/>Название новости
                    </Card>
                </CardGrid>

            </Panel>
        </SplitLayout>
    )
};

export default News;