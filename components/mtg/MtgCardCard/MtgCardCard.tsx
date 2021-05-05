// It's a card that contains the data for an MTG Card.
// My naming is flawless.
import React, { FunctionComponent } from 'react';

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

const MtgCardCard: FunctionComponent<MtgCardCardProps> = ({ card }) => <div
    className="border-black rounded-lg border-4 border-b-8"
  >
    { !!card.image_uris && 
      <header>
        <img
          src={card.image_uris.art_crop}
          alt=""
        />
      </header>
    }
    <main className="p-4">
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
        <div>
          {card.oracle_text}
        </div>
      }
    </main>
    <footer>

    </footer>
  </div>

export default MtgCardCard;