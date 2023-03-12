export const getCustomListToRender = (list, renderHeader, renderBody) => {
    const listToRender = [];

    (list || []).forEach(item => {
        listToRender.push({
            Header: renderHeader(item),
            Body: renderBody(item),
        });
    });

    return listToRender;
};
