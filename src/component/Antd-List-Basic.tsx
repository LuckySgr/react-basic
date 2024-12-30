import { List } from 'antd';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const AntdListBasic = () => {
    return (
        <div>
            <h1>{'------九、Antd 基本使用 -----'}</h1>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={() => (
                    <List.Item actions={[<a key="list-loadmore-edit" onClick={() => {
                        console.log(1111111111111);
                    }}>edit</a>, <a key="list-loadmore-more">more</a>]}>
                        <List.Item.Meta
                            description="Ant Design, a design language"
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}


export default AntdListBasic;