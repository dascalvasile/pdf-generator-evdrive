import {ProductInterface} from "../interfaces/product.interface";

const imageLogo64 = 'data:image/png;base64,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';
const styles = {
  header: {
    fillColor: '#126cf1',
    fillOpacity: 0.15,
    bold: true,
    fontSize: 14,
    margin: [0, 10, 0, 10]
  },
  cell: {
    border: [true, true, true, true],
    borderColor: ['#000000', '#000000', '#000000', '#000000'],
    margin: [30, 10, 0, 10]

  }
};

export async function getOfferDocumentDefinition(
  products: ProductInterface[],
  recipientName: string,
  recipientPhone: string,
  date: string,
):  Promise<any> {

  type TableBodyCell =
    | string
    | {
    text?: string;
    image?: string;
    fit?: number[];
    fillColor?: string | string[];  // <-- Adaugă
    bold?: boolean;
    fontSize?: number;
  };
  const tableBody: TableBodyCell[][] = [
    [
      { text: 'NR', ...styles.header},
      { text: 'IMAGES' ,...styles.header},
      { text: 'BRAND',...styles.header},
      { text: 'MODEL', ...styles.header},
      { text: 'TRIM LEVELS', ...styles.header},
      { text: 'PRICE $', ...styles.header}
    ]
  ];

  const productImagePromises = products.map(async product => {
    if (product.imageUrls && product.imageUrls.length > 0) {
      return await blobUrlToDataURL(product.imageUrls[0]);
    } else {
      return ''; // or placeholder
    }
  });

  const imageURIs = await Promise.all(productImagePromises);

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const imageURI = imageURIs[i] ? {image: imageURIs[i], fit: [100, 100]} : '';
    const rowData = [
      { text: product.id.toString(), ...styles.cell },
      imageURI,
      { text: product.brand, ...styles.cell },
      { text: product.model, ...styles.cell },
      { text: product.trimLevel, ...styles.cell },
      { text: product.price.toString(), ...styles.cell },
    ];
    tableBody.push(rowData);
  }

  return {
    pageSize: 'A4',
    content: [
      {
        image: imageLogo64,
        alignment: 'center',
        width: 500,
      },
      {
        text: 'DATE',
        fontSize: 12,
        bold: true,
      },
      {
        text: date, // Provided date
        fontSize: 12,
      },
      {
        columns: [
          [
            {text: 'TO:', fontSize: 12, bold: true},
            {text: 'Name: ' + recipientName, fontSize: 12},
            {text: 'Phone: ' + recipientPhone, fontSize: 12},
          ],
          [
            {
              text: [
                'str. Studenților 7/8, Râșcani\n',
                'or. Chișinău, Republica Moldova\n',
                'Phone: +37379555541\n',
                'E-mail: office@evdrive.md'
              ],
              fontSize: 12,
              alignment: 'right'
            }
          ]
        ]
      },
      {
        table: {
          headerRows: 1,
          widths: [40, 100, 70, 70, 100, 70],
          alignment: "center",
          body: tableBody
        },
        margin: [0, 20, 0, 20]
      },
      {
        text: [
          '*With advance payment\n',
          '*Price includes: shipping, customs clearance, luxury tax. (the invoice is issued)\n',
          '*Payment is made at the BNM rate.'
        ],
        fontSize: 12,
        margin: [0, 20, 0, 20]
      },
      {
        text: 'www.evdrive.md',
        fontSize: 12,
        alignment: 'center',
        margin: [0, 300, 20, 0]  // 450 este doar un exempl
      }
    ],
    defaultStyle: {
      columnGap: 20
    },
    styles: styles

  };
}
async function blobUrlToDataURL(blobUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      const reader = new FileReader();
      reader.onloadend = function() {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(xhr.response);
    };
    xhr.onerror = reject;
    xhr.open('GET', blobUrl);
    xhr.responseType = 'blob';
    xhr.send();
  });
}
