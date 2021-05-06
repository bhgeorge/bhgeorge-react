// It's a card that contains the data for an MTG Card.
// My naming is flawless.
import React, { FunctionComponent } from 'react';
import WCard from '../../warlock/Card/WCard';

type MtgCardCardProps = {
  card: {
    name: string,
    type_line: string,
    image_uris?: {
      art_crop: string,
    },
    mana_cost?: string,
    oracle_text?: string,
  },
}

const MtgCardCard: FunctionComponent<MtgCardCardProps> = ({ card }) => 
  <WCard
    header={ !!card.image_uris &&
      <img
        src={card.image_uris.art_crop}
        alt=""
      />
    }
  >
    <div className="border-b border-gray-light pb-2 mb-2">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">
          {card.name}
        </h2>
        { !!card.mana_cost &&
          <p>{card.mana_cost}</p>
        }
      </div>
      <p className="text-sm italic">{ card.type_line }</p>
    </div>
    { !!card.oracle_text && 
      <div className="whitespace-pre-wrap">
        {card.oracle_text}
      </div>
    }
  </WCard>

export default MtgCardCard;