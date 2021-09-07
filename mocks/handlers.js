import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.mercadolibre.com/thisurliscorrect', (req, res, ctx) => {
    return res(
      ctx.status(200, 'OK'),
      ctx.json({
        site_id: 'MLA',
        country_default_time_zone: 'GMT-03:00',
        query: '​:iphone',
        paging: {
          total: 152,
          primary_results: 0,
          offset: 0,
          limit: 50,
        },
        results: [
          {
            id: 'MLA903951222',
            site_id: 'MLA',
            title: 'Cable Cargador Usb Original Lightning iPhone 6 7 8 X Xs Xr',
            seller: {
              id: 663368694,
              permalink: 'http://perfil.mercadolibre.com.ar/DIGITAL.RESELLER',
              registration_date: '2020-10-25T19:44:00.000-04:00',
              car_dealer: false,
              real_estate_agency: false,
              tags: [
                'normal',
                'user_info_verified',
                'eshop',
                'mshops',
                'credits_profile',
                'messages_as_seller',
                'messages_as_buyer',
              ],
              eshop: {
                nick_name: 'IAPPLE.ARGENTINA',
                eshop_rubro: null,
                eshop_id: 453938,
                eshop_locations: [],
                site_id: 'MLA',
                eshop_logo_url: 'http://resources.mlstatic.com/eshops/663368694vff0848.png',
                eshop_status_id: 1,
                seller: 663368694,
                eshop_experience: 0,
              },
              seller_reputation: {
                transactions: {
                  total: 29820,
                  canceled: 1414,
                  period: 'historic',
                  ratings: {
                    negative: 0.07,
                    positive: 0.9,
                    neutral: 0.03,
                  },
                  completed: 28406,
                },
                power_seller_status: 'platinum',
                metrics: {
                  claims: {
                    rate: 0,
                    excluded: {
                      real_rate: 0.0209,
                      real_value: 197,
                    },
                    value: 0,
                    period: '60 days',
                  },
                  delayed_handling_time: {
                    rate: 0,
                    excluded: {
                      real_rate: 0.0395,
                      real_value: 357,
                    },
                    value: 0,
                    period: '60 days',
                  },
                  sales: {
                    period: '60 days',
                    completed: 8927,
                  },
                  cancellations: {
                    rate: 0,
                    excluded: {
                      real_rate: 0.001,
                      real_value: 10,
                    },
                    value: 0,
                    period: '60 days',
                  },
                },
                protection_end_date: '2021-09-14T00:00:00.000-04:00',
                real_level: 'yellow',
                level_id: '5_green',
              },
            },
            price: 1899.99,
            prices: {
              id: 'MLA903951222',
              prices: [
                {
                  id: '8',
                  type: 'standard',
                  conditions: {
                    context_restrictions: [],
                    start_time: null,
                    end_time: null,
                    eligible: true,
                  },
                  amount: 1899.99,
                  regular_amount: null,
                  currency_id: 'ARS',
                  exchange_rate_context: 'DEFAULT',
                  metadata: {},
                  last_updated: '2021-08-20T02:37:45Z',
                },
              ],
              presentation: {
                display_currency: 'ARS',
              },
              payment_method_prices: [],
              reference_prices: [],
              purchase_discounts: [],
            },
            sale_price: null,
            currency_id: 'ARS',
            available_quantity: 500,
            sold_quantity: 5000,
            buying_mode: 'buy_it_now',
            listing_type_id: 'gold_special',
            stop_time: '2041-01-07T04:00:00.000Z',
            condition: 'new',
            permalink:
              'https://articulo.mercadolibre.com.ar/MLA-903951222-cable-cargador-usb-original-lightning-iphone-6-7-8-x-xs-xr-_JM',
            thumbnail: 'http://http2.mlstatic.com/D_659328-MLA47006823834_082021-O.jpg',
            thumbnail_id: '659328-MLA47006823834_082021',
            accepts_mercadopago: true,
            installments: {
              quantity: 12,
              amount: 269.43,
              rate: 70.17,
              currency_id: 'ARS',
            },
            address: {
              state_id: 'AR-C',
              state_name: 'Capital Federal',
              city_id: null,
              city_name: 'Belgrano',
            },
            shipping: {
              free_shipping: true,
              mode: 'me2',
              tags: ['self_service_in'],
              logistic_type: 'cross_docking',
              store_pick_up: false,
            },
            seller_address: {
              id: '',
              comment: '',
              address_line: '',
              zip_code: '',
              country: {
                id: 'AR',
                name: 'Argentina',
              },
              state: {
                id: 'AR-C',
                name: 'Capital Federal',
              },
              city: {
                id: null,
                name: 'Belgrano',
              },
              latitude: '',
              longitude: '',
            },
            attributes: [
              {
                value_name: 'Apple',
                attribute_group_id: 'OTHERS',
                value_struct: null,
                values: [
                  {
                    id: '9344',
                    name: 'Apple',
                    struct: null,
                    source: 2860837171021627,
                  },
                ],
                attribute_group_name: 'Otros',
                source: 2860837171021627,
                id: 'BRAND',
                name: 'Marca del cable',
                value_id: '9344',
              },
              {
                value_struct: {
                  number: 1,
                  unit: 'm',
                },
                attribute_group_name: 'Otros',
                value_name: '1 m',
                values: [
                  {
                    name: '1 m',
                    struct: {
                      number: 1,
                      unit: 'm',
                    },
                    source: 2860837171021627,
                    id: null,
                  },
                ],
                attribute_group_id: 'OTHERS',
                source: 2860837171021627,
                id: 'CABLE_LENGTH',
                name: 'Largo del cable',
                value_id: null,
              },
              {
                value_name: 'Nuevo',
                value_struct: null,
                values: [
                  {
                    id: '2230284',
                    name: 'Nuevo',
                    struct: null,
                    source: 2860837171021627,
                  },
                ],
                attribute_group_id: 'OTHERS',
                source: 2860837171021627,
                id: 'ITEM_CONDITION',
                name: 'Condición del ítem',
                value_id: '2230284',
                attribute_group_name: 'Otros',
              },
              {
                value_name: 'Ligthning',
                value_struct: null,
                attribute_group_id: 'OTHERS',
                id: 'MODEL',
                value_id: null,
                attribute_group_name: 'Otros',
                source: 2860837171021627,
                name: 'Modelo del cable',
                values: [
                  {
                    id: null,
                    name: 'Ligthning',
                    struct: null,
                    source: 2860837171021627,
                  },
                ],
              },
            ],
            original_price: null,
            category_id: 'MLA5338',
            official_store_id: null,
            domain_id: 'MLA-DATA_CABLES_AND_ADAPTERS',
            catalog_product_id: null,
            tags: [
              'good_quality_picture',
              'good_quality_thumbnail',
              'loyalty_discount_eligible',
              'brand_verified',
              'immediate_payment',
              'cart_eligible',
              'shipping_guaranteed',
            ],
            order_backend: 1,
            use_thumbnail_id: false,
            offer_score: null,
            offer_share: null,
          },
        ],
      }),
    );
  }),
  rest.get('/reviews', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
          author: 'John Maverick',
          text: 'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
        },
      ]),
    );
  }),
];
