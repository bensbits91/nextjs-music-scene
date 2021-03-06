import BulletinCard from './bulletin-card';

export default function BulletinList({ bulletins }) {
    return (
        <div className='grid-wrap'>
            {bulletins.map(b => <BulletinCard key={b.id} bulletin={b} />)}
        </div>
    );
}